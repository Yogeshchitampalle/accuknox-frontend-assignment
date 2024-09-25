import { Drawer, Button, Typography, IconButton } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { DrawerActions } from "../../Store/ui-slice/UI-slice";
import WidgetTable from "./Table/WidgetTable";
import { XMarkIcon } from '@heroicons/react/24/solid';

export function DrawerPlacement() {
  const isOpenDrawer = useSelector(state => state.Drawer.isOpen);
  const dispatch = useDispatch();
  console.log(isOpenDrawer);

  // Handler to toggle the drawer
  const toggleHandler = () => {
    dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <>
      <Drawer
        placement="right"
        open={isOpenDrawer}
        onClose={toggleHandler}
        className="fixed w-2/3 right-80 top-0 h-full"
      >
        <div className="bg-white h-full w-full md:w-[70vw] lg:w-[50vw] xl:w-[40vw] p-0 shadow-sm">
          <header className="bg-blue-600 p-4 flex justify-between items-center">
            <Typography variant="h5" color="white" className="ml-2">
              Add Widget
            </Typography>
            <IconButton variant='text' color='red' className='bg-white ml-auto' onClick={toggleHandler}>
              <XMarkIcon className="h-6 w-6  text-red-500" />
            </IconButton>
          </header>
          <Typography color="gray" className="mb-8 pr-4 ml-5 mt-5 font-normal">
            Personalize your dashboard by adding the following widgets
          </Typography>
          <div className="mb-11">
            <WidgetTable />
          </div>
          <div className="flex gap-2 justify-center mr-2">
            <Button className="bg-red-500 text-white" onClick={toggleHandler} size="sm" variant="outlined">
              Cancel
            </Button>
            <Button className="bg-blue-500 text-white" size="sm">Confirm</Button>
          </div>
        </div>
      </Drawer>
    </>
  );
}
