# Chaldal Assignment

This project is build in react-native (expo). There are some other package are used in this project "react-native-gesture-handler", "react-native-reanimated", "react-native-safe-area-context", "@react-navigation" etc for navigation between the screen. Also "@react-native-community/datetimepicker" is used for date picker.

## Folder Structure
```
├── android
├── ios
├── src
│   ├── Assets
│   |── Common
│   |── Views
|   |   |── Screens
|   |   └── Components
│   └── Route
├── dir2
│   ├── file21.ext
│   ├── file22.ext
│   └── file23.ext
├── App.js
├── package.json
└── README.md`

```


## Routing Navigation
For navigation here i use stack navigation with slide animation on a screen. There are two route has been declared here. One is "Filter" and another one is "FilteredList". Here Filter route contains selected filter option and filterdList is containing user grid.


## Select Filter Option Screen

![Select Filter Option](https://nazmultanvir.com/assets/app1.png)

In this screen we are taking inputs from user and they are "fromDate", "toDate", "active", "superActive", "bored". when user are is pressing "Generate" button. i have send a object parameters with navigation.
```
  filterGenerateAction = (data) => {
    props.navigation.push("FilteredList", { filter: data });
  };
```
Also in this screen i have called a component called "FilterGenerate", so that we can use it in another screen.


## Show User Grid
![Show User Grid](https://nazmultanvir.com/assets/app2.png)


Receive Parameters from "Filter" screen and save it in state of "FilteredList". according to the filter inputs by the user it is rendering user list using "FlatList". I have create a data layer function which one is filtering data and returning array of object. 

![Show User Grid](https://nazmultanvir.com/assets/app3.png)

There is a modal is used for edit Filter select. using this modal user can modify the options. Modify option will be updated in state. 


## Data / Filtering Logic

```
const UserDataFilter = (filter, searchText) => {
  let users = [];
  if (userList) {
    userList.map((user) => {
      let totalMeal = 0;
      let daysWithDetails = objectArrayDetails(user.calendar?.daysWithDetails);
      daysWithDetails.map((x) => {
        if (checkADayInRange(filter?.fromDate, filter?.toDate, x.day.date)) {
          let meal = objectArrayDetails(x.details.mealsWithDetails).length;
          totalMeal = meal + totalMeal;
        }
      });
      let userCustomizeData = {
        name: user.profile?.name,
        pictureUrl: user.profile?.pictureUrl,
        meal: totalMeal,
      };
      if (filter.bored && totalMeal < 5) {
        users.push(userCustomizeData);
      }
      if (filter.active && totalMeal >= 5 && totalMeal < 10) {
        users.push(userCustomizeData);
      } else if (filter.superActive && totalMeal >= 10) {
        users.push(userCustomizeData);
      }
    });
  }
  return users.filter((user) =>
    user.name.toLowerCase().includes(searchText?.toLowerCase())
  );
};
```


## License
[MIT](https://choosealicense.com/licenses/mit/)