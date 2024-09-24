# accuknox-frontend-assignment
# Dynamic Dashboard Application

This project is a dynamic dashboard application built with React, Redux, and Tailwind CSS. It allows users to create, manage, and visualize widgets within a customizable dashboard.
The app uses a JSON structure to dynamically build and manage the dashboard, offering flexibility to tailor it to specific needs.

## Features

- **Dynamic Dashboard Creation**: The dashboard is generated based on a JSON structure, including categories and widgets for customizable layouts.
- **Widget Management**: Add and remove widgets from categories. For example, "CSPM Executive Dashboard" is a sample category.
- **Random Text for Widgets**: Widgets display random text as placeholders, which can be replaced with actual data.
- **Add Widget Modal**: Use the "+Add Widget" button to open a modal for specifying the widget's name and content, then add it to the selected category.
- **Widget Removal**: Remove widgets using a cross icon or by managing them from the category list.
- **Widget Search Functionality**: Search for widgets across the list to easily find and manage them.

## Technologies Used

- **React**: For building the user interface and handling component state.
- **Redux**: For managing application state and dynamic widget operations.
- **Tailwind CSS**: For styling the application.
- **FontAwesome**: For icons.
- **Heroicons**: For additional icons.
- **Recharts**: For charting components.

## Installation

1. Clone the repository to your local machine.
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory.
   ```bash
   cd <project-directory>
   ```
3. Install the dependencies.
   ```bash
   npm install
   ```

## Usage

1. Start the application.
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the dashboard.

## JSON Structure

The dashboard is built dynamically using a JSON structure. Below is an example of the JSON format used:

```json
{
  "categories": [
    {
      "name": "CSPM Executive Dashboard",
      "widgets": [
        {
          "name": "Widget 1",
          "text": "Random text for Widget 1"
        },
        {
          "name": "Widget 2",
          "text": "Random text for Widget 2"
        }
      ]
    },
    {
      "name": "Another Category",
      "widgets": [
        {
          "name": "Widget A",
          "text": "Random text for Widget A"
        }
      ]
    }
  ]
}
```

## Adding and Removing Widgets

- **Add Widget**: Click on the "+Add Widget" button, fill in the widget name and text, and add it to the desired category.
- **Remove Widget**: Click on the cross icon on the widget to remove it from the category.

## Search Functionality

Use the search bar to find widgets across all categories. The search functionality helps in quickly locating and managing widgets.

## License

This project is licensed under the MIT License.
