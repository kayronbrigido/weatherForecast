import React, { useState } from "react";
import { FlatList, Modal, TouchableOpacity, TouchableWithoutFeedback, View, Text, ViewStyle, TextStyle } from "react-native";
import { removeAccent } from "../../services";
import styles from "./DropdownModalStyle";

interface IDropdownModal {
    data: string[],
    onSelect: (value: string, index: number) => void;
    setVisible: (visible: boolean) => void;
    visible: boolean,
    value: string,
    placeholder?: string,
    placeholderStyle?: TextStyle,
    title?: string,
    style?: ViewStyle;
    onPress?: () => void,
    closeOnSelect?: boolean,
    hasSearch?: boolean,
    isTextArea?: boolean,
}

const DropdownModal = (props: IDropdownModal) => {
    const {
        data,
        onSelect,
        setVisible,
        visible,
        value,
        placeholder,
        placeholderStyle,
        title,
        style,
        onPress,
        closeOnSelect,
        hasSearch = true,
        isTextArea = false,
    } = props

    const handlePress = (item: string, index: number) => {
        setSelected(item)
        onSelect(item, index);
        if (closeOnSelect) {
            setVisible(false);
        }
    }
    const [selected, setSelected] = useState("");
    const [search, setSearch] = useState("");

    return (
        <View>
            <TouchableWithoutFeedback
                onPress={() => {
                    setVisible(true);
                    if (onPress) onPress();
                }}>
                <View style={[style, styles.input]}>
                    {!!placeholder && !!value && !isTextArea && (<Text style={placeholderStyle}>{placeholder}</Text>)}
                    <View style={styles.textContainer}>
                        <Text>
                            {value === "" ? placeholder : value}
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Modal {...props} style={null} transparent>
                <TouchableWithoutFeedback onPress={() => { setVisible(false) }}>
                    <View style={styles.overlay}>
                        <TouchableWithoutFeedback>
                            <View style={styles.paper}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    style={styles.list}
                                    ListHeaderComponent={
                                        <View>
                                            {
                                                //criar função de pesquisar no header
                                            }
                                        </View>
                                    }
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity onPress={() => { handlePress(item, index) }}>
                                            <View style={styles.option}>
                                                <View style={
                                                    selected === item ? [styles.touchButtonRadio, styles.touchButtonRadioColored] : styles.touchButtonRadio}>
                                                    <View style={selected === item ? styles.coloredRadio : null} />
                                                </View>
                                                <Text>{item}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                                    keyExtractor={(item) => item}
                                    data={data.filter((item) => (
                                        search !== "" ? removeAccent(item).toLowerCase().search(search.toLowerCase()) : 0) !== -1
                                    )}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}
export default DropdownModal;