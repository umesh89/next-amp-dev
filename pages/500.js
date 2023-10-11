import Layout from "@/components/templatepart/layout";
import Container from "@/components/templatepart/container";
import { getCanonicalPath } from "@/utils/requestApi";
import { useRouter } from "next/router";
export default function Custom500() {
  const router = useRouter();
  const  canonical = getCanonicalPath(router.asPath)
  return (
    <Layout canonical={canonical}>
      <Container optClass="noflex">
      <h1>500 - Server-side error occurred</h1>
      </Container>
     
    </Layout>
  )
}