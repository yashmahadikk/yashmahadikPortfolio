import { SaleshandyPrdViewer } from "@/components/saleshandy-prd-viewer"

type SaleshandyPrdPageProps = {
  title: string
  content: string
}

export function SaleshandyPrdPage({ title, content }: SaleshandyPrdPageProps) {
  return <SaleshandyPrdViewer title={title} content={content} />
}
