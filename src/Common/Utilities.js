import userList from "../Assets/data/userList";

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

const checkADayInRange = (from, to, date) => {
  let checkDate = new Date(date);
  return checkDate >= new Date(from) && checkDate <= new Date(to);
};
const objectArrayDetails = (value) => {
  let array = [];
  Object.keys(value).map((key) => array.push(value[key]));
  return array;
};


export default { UserDataFilter };
