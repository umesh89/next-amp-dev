import Layout from "@/components/templatepart/layout";
import Container from "@/components/templatepart/container";
import { useRouter } from "next/router";
import { getCanonicalPath } from "@/utils/requestApi";
const Custom404 = () => {
  const router = useRouter();
  const  canonical = getCanonicalPath(router.asPath)
  return (
    <Layout canonical={canonical}>
      <Container optClass="noflex">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you're looking for does not exist.</p>
      </Container>
    </Layout>

  );
};

export default Custom404;