var horizontalStatus ={
    rainy: {
        ios: "ios-rainy",
        android: "md-rainy"
    },
    cloudy: {
        ios: "ios-cloudy",
        android: "md-cloudy"
    },
    thunderstorm: {
        ios: "ios-thunderstorm",
        android: "md-thunderstorm"
    },
    sunny: {
        ios: "ios-sunny",
        android: "md-sunny"
    },
}
var horizontalFlatListData = [
    {
        hour: "1AM",
        status: horizontalStatus.rainy,
        degrees: 57
    },
    {
        hour: "2AM",
        status: horizontalStatus.cloudy,
        degrees: 62
    },
    {
        hour: "3AM",
        status: horizontalStatus.thunderstorm,
        degrees: 64
    },
    {
        hour: "4AM",
        status: horizontalStatus.sunny,
        degrees: 69
    },
    {
        hour: "5AM",
        status: horizontalStatus.sunny,
        degrees: 69
    },
    {
        hour: "6AM",
        status: horizontalStatus.sunny,
        degrees: 69
    },
    {
        hour: "7AM",
        status: horizontalStatus.sunny,
        degrees: 69
    },
    {
        hour: "8AM",
        status: horizontalStatus.sunny,
        degrees: 69
    },
    {
        hour: "9AM",
        status: horizontalStatus.sunny,
        degrees: 69
    },
    {
        hour: "10AM",
        status: horizontalStatus.sunny,
        degrees: 69
    },
    {
        hour: "11AM",
        status: horizontalStatus.sunny,
        degrees: 69
    },
    {
        hour: "12PM",
        status: horizontalStatus.sunny,
        degrees: 69
    }
]

export {horizontalStatus} 
export {horizontalFlatListData}
