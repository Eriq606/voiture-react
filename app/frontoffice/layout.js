'use client';

import SideBar from "./components/SideBar";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
export default function Layout({ children }) {
  return (
    <>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@500;700&display=swap" rel="stylesheet"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
    </head>
    <body>
      <div className="container-fluid position-relative d-flex p-0">
        {/* <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem",}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}
        <SideBar/>
        {children}
      </div>
      <script async type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script async type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      <script async type="text/javascript" src="/lib/chart/chart.min.js"></script>
      <script async type="text/javascript" src="/lib/easing/easing.min.js"></script>
      <script async type="text/javascript" src="/lib/waypoints/waypoints.min.js"></script>
      <script async type="text/javascript" src="/lib/owlcarousel/owl.carousel.min.js"></script>
      <script async type="text/javascript" src="/lib/tempusdominus/js/moment.min.js"></script>
      <script async type="text/javascript" src="/lib/tempusdominus/js/moment-timezone.min.js"></script>
      <script async type="text/javascript" src="/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>
      <script async type="text/javascript" src="/js/main.js"></script>
    </body>
    </>
  );
}