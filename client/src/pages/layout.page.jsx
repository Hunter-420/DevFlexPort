import SideBar from "../components/sideBar.component";
import TopNavBar from "../components/topNav.component";
import Footer from "../components/footer.component";
import "../css/layout.page.css";

const Layout = ({ Page_Name }) => {
  return (
    <>
      <div class="flex">
        <SideBar />

        <div class="flex-1 layoutMainContent">
          <TopNavBar />
          {/* main components */}
          <div className="mainContent">
            <Page_Name />
          </div>
          <div className="mt-20">
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
