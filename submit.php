<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
    exit;
}

// Strip newlines from any value used in headers to prevent injection
function safe($val) {
    return preg_replace('/[\r\n]/', '', (string) $val);
}

$to      = 'info@thewebhouse.africa';
$subject = safe(isset($data['subject']) ? $data['subject'] : 'New Enquiry — The Web House');
$replyTo = safe(isset($data['email']) ? $data['email'] : '');

// Build the email body
$lines = [];
foreach ($data as $key => $val) {
    if ($key === 'subject') continue;
    $label   = ucwords(trim(preg_replace('/([A-Z])/', ' $1', str_replace('_', ' ', $key))));
    $lines[] = $label . ': ' . (trim((string) $val) !== '' ? $val : '—');
}
$body = implode("\n", $lines);

$headers  = "From: The Web House Website <noreply@thewebhouse.africa>\r\n";
if ($replyTo) {
    $headers .= "Reply-To: $replyTo\r\n";
}
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Mail delivery failed']);
}
