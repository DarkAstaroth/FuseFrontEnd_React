import FusePageCarded from "@fuse/core/FusePageCarded";
import { styled } from "@mui/styles";
import SucursalHeader from "./Content/SucursalHeader";
import SucursalTable from "./Content/SucursalTable";

const Root = styled(FusePageCarded)({
  "& .FusePageCarded-header": {},
  "& .FusePageCarded-toolbar": {},
  "& .FusePageCarded-content": {},
  "& .FusePageCarded-sidebarHeader": {},
  "& .FusePageCarded-sidebarContent": {},
});

function Sucursal(props) {
  return (
    <Root
      header={
        <div className="p-24">
          <SucursalHeader />
        </div>
      }
    //   contentToolbar={
    //     <div className="px-24">
    //       <h4>Content Toolbar</h4>
    //     </div>
    //   }
      content={
        <div className="p-24">
            <SucursalTable />
        </div>
      }
    />
  );
}

export default Sucursal;
