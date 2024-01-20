import { Container, Row, Stack } from "react-bootstrap";
import SideBar from "./components/SideBar";
export default function Layout({ children }) {
  return (
    <>
    <Container>
      <div className="row g-0">
          <SideBar></SideBar>
          {children}
      </div>
    </Container>
    </>
  );
}