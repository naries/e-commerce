import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (data) => {
    let dataValue = JSON.stringify(data.value);
    return await AsyncStorage.setItem(data.name, dataValue);
    // return await getData(name);
};

export const getData = async (name) => {
    return await AsyncStorage.getItem(name)
}