import { Button, IconButton } from '@material-tailwind/react';
import { ArrowPathIcon, PlusIcon } from '@heroicons/react/24/solid';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DrawerPlacement } from '../DrawerAddWidget/Drawerplacement';
import { useDispatch, useSelector } from 'react-redux';
import { DrawerActions } from '../../Store/ui-slice/UI-slice';

const Cnappdash = () => {
  const isDrawer = useSelector(state => state.Drawer.isOpen);
  const dispatch = useDispatch();

  console.log(isDrawer);

  // Handler to open the drawer
  const openHandler = () => {
    dispatch(DrawerActions.openDrawer());
  };

  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-xl ml-4 font-bold text-foreground">CNAPP Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          {/* Button to add a widget */}
          <Button
            onClick={openHandler}
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80"
          >
            Add widget
          </Button>
          <IconButton variant="text" color='black' className='h-5'>
            <PlusIcon className="h-4 w-4 text-black-500" />
          </IconButton>
        </div>
        <div>
          {isDrawer && <DrawerPlacement />}
        </div>
        <div className='flex gap-3'>
          {/* Refresh button */}
          <IconButton variant='text' color='black' className='bg-white'>
            <ArrowPathIcon className="h-6 w-6 text-black-500" />
          </IconButton>
          {/* Time filter dropdown */}
          <div className='flex gap-2 p-2 bg-white border-2 rounded-md cursor-pointer'>
            <FontAwesomeIcon icon={faClock} className='text-xl' />
            <select id='filter' defaultValue={2} className='bg-gray cursor-pointer'>
              <option value={"today"}>Today</option>
              <option value={"yesterday"}>Yesterday</option>
              <option value={2}>Last 2 days</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cnappdash;
