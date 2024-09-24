import { useState, useEffect } from "react";
import {
  Input,
  Button,
  Dialog,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Select,
  Option,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { DrawerActions } from "../../Store/ui-slice/UI-slice";
import { WidgetSliceActions } from "../../Store/widget-slice/Widget-slice";

function WidgetForm() {
  const dispatch = useDispatch();
  const isOpenWidget = useSelector((state) => state.Drawer.isOpenwid);

  const [formData, setFormData] = useState(() => {
    // Load initial state from local storage if available
    const savedFormData = localStorage.getItem("formData");
    return savedFormData ? JSON.parse(savedFormData) : { name: "", description: "", category: "" };
  });

  useEffect(() => {
    // Save form data to local storage whenever it changes
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const toggleHandler = () => {
    dispatch(DrawerActions.toggleWidget());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      category: value,
    }));
  };

  const handleSubmit = () => {
    dispatch(
      WidgetSliceActions.addWidget({
        category: formData.category,
        ...formData,
      })
    );
    toggleHandler();
  };


  const handleCancel = () => {
    toggleHandler();
  };

  return (
    <Dialog size="sm" open={isOpenWidget} handler={toggleHandler} className="p-4">
      <DialogHeader className="relative m-0 block">
        <Typography variant="h4" color="blue-gray">
          Widget Form
        </Typography>
      </DialogHeader>
      <DialogBody className="space-y-4 pb-6">
        <div>
          <Typography variant="small" color="blue-gray" className="mb-2 text-left font-medium">
            Widget Name
          </Typography>
          <Input
            color="gray"
            size="lg"
            placeholder="Widget name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="placeholder:opacity-100 focus:!border-t-gray-900"
            containerProps={{ className: "!min-w-full" }}
            labelProps={{ className: "hidden" }}
          />
        </div>
        <div>
          <Typography variant="small" color="blue-gray" className="mb-2 text-left font-medium">
            Widget Description
          </Typography>
          <Input
            color="gray"
            size="lg"
            placeholder="Enter description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="placeholder:opacity-100 focus:!border-t-gray-900"
            containerProps={{ className: "!min-w-full" }}
            labelProps={{ className: "hidden" }}
          />
        </div>
        <div className="w-72">
          <Typography variant="small" color="blue-gray" className="mb-2 text-left font-medium">
            Select Widget
          </Typography>
          <Select
            label="Select Version"
            size="lg"
            value={formData.category}
            onChange={handleSelectChange}
          >
            <Option value="CSPM Executive Dashboard">CSPM Executive Dashboard</Option>
            <Option value="CWP Executive Dashboard">CWP Executive Dashboard</Option>
            <Option value="Registry Executive Dashboard">Registry Executive Dashboard</Option>
          </Select>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button className="ml-auto bg-red-500 text-white" onClick={handleCancel}>
          Cancel
        </Button>
        <Button className="ml-2 bg-green-500 text-white" onClick={handleSubmit}>
          Submit
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default WidgetForm;
