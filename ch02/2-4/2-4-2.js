// this를 변수에 저장해서 forEach callback 함수에서 사용
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function() {
        var that = this; // relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function(friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();

// bind() 메소드를 사용해서 객체 리터럴 this 사용
var relationship2 = {
    name: 'zero2',
    friends: ['nero2', 'hero2', 'xero2'],
    logFriends: function() {
        this.friends.forEach(function(friend) {
            console.log(this.name, friend);
        }.bind(this));
    },
};
relationship2.logFriends();

// 화살표 함수를 사용해서 this를 사용
var relationship3 = {
    name: 'zero3',
    friends: ['nero3', 'hero3', 'xero3'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship3.logFriends();

// 바깥쪽 this를 그대로 쓸 때는 화살표 함수를 사용하고,
// 다른 this를 사용하고 싶다면 일반적인 function 함수 선언식으로 사용하면 된다.