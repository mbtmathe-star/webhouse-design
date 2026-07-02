import { useParams, Navigate } from 'react-router-dom'

export default function ServiceDetail() {
  const { slug } = useParams()
  return <Navigate to={{ pathname: '/services', hash: `#${slug}` }} replace />
}
