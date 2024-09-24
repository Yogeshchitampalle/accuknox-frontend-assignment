import React, { useState } from "react";
import { Tabs, TabsHeader, TabsBody, Tab, List, ListItem, Checkbox } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { WidgetSliceActions } from "../../../Store/widget-slice/Widget-slice";

function WidgetTable() {
  const [activeTab, setActiveTab] = useState("CSPM");
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.Widget.widgets);
  const [selectedItems, setSelectedItems] = useState([]);

  // Filter data based on the active tab
  const filterData = datas.categories.find((item) => item.label === activeTab);
  console.log(filterData.widgets);

  // Handle checkbox change
  const handleCheckboxChange = (id, item) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((selectedId) => selectedId !== id));
      dispatch(WidgetSliceActions.removeWidget({ categoryid: filterData.id, item }));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {datas.categories.map(({ label, id }) => (
          <Tab
            key={id}
            value={label}
            onClick={() => setActiveTab(label)}
            className={activeTab === label ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        <List>
          {filterData.widgets.map((item) => (
            <ListItem selected={setActiveTab} className="font-semibold" key={item.id}>
              <Checkbox
                className="h-4 w-4"
                value={item.id}
                checked={selectedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id, item)}
              />
              {item.name}
            </ListItem>
          ))}
        </List>
      </TabsBody>
    </Tabs>
  );
}

export default WidgetTable;
