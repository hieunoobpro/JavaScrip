//Bai 1
function getStringHasMaxLength(arr) {
  //maxLength được sử dụng để lưu độ dài lớn nhất của chuỗi trong mảng.
  let maxLength = 0;
  //result được sử dụng để lưu trữ các chuỗi có độ dài bằng với maxLength.
  let result = [];
  for (let i = 0; i < arr.length; i++) {
  //Nếu độ dài của chuỗi hiện tại lớn hơn maxLength, ta cập nhật maxLength và xóa những chuỗi đã được lưu trữ trong result, sau đó thêm chuỗi hiện tại vào result.
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      result = [arr[i]];
    } else if (arr[i].length === maxLength) {
      //Nếu độ dài của chuỗi hiện tại bằng với maxLength, ta thêm chuỗi hiện tại vào result.
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(getStringHasMaxLength(['aba', 'aa', 'ader', 'crr', 'vcdrete']));

//Bai 2
users = [
  {
      name: "Bùi Công Sơn",
      age: 30,
      isStatus: true
  },
  {
      name: "Nguyễn Thu Hằng",
      age: 27,
      isStatus: false
  },
  {
      name: "Phạm Văn Dũng",
      age: 20,
      isStatus: false
  }
];
//Trả về mảng các user có age > 25 và isStatus = true
function getUsersByAgeAndStatus(users) {
  //sử dụng phương thức filter() để lọc các object user có age > 25 và isStatus = true
  return users.filter(user => user.age > 25 && user.isStatus === true);
}
console.log(getUsersByAgeAndStatus(users));
 //Trả về mảng các user có age tăng dần:
function getUsersSortedByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}
console.log(getUsersSortedByAge(users));

// Bai 3
function getCountElement(arr) {
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      //Nếu phần tử hiện tại đã tồn tại trong count, ta tăng giá trị của phần tử đó lên 1
      count[arr[i]]++;
    } else {
      //Nếu phần tử hiện tại chưa tồn tại trong count, ta khởi tạo giá trị của phần tử đó bằng 1
      count[arr[i]] = 1;
    }
  }
  return count;
}
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));
