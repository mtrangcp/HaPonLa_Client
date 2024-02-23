import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const Test = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

    const renderTabs = () => {
        return tabs.map((tab, index) => (
            <TouchableOpacity
                key={index}
                style={[styles.tab, activeTab === index && styles.activeTab]}
                onPress={() => setActiveTab(index)}
            >
                <Text style={styles.tabText}>{tab}</Text>
            </TouchableOpacity>
        ));
    };

    const renderContent = () => {
        switch (activeTab) {
            case 0:
                return <View><Text>á44454545</Text></View>
                ;
            case 1:
                return <Text>Content of Tab 2</Text>;
            case 2:
                return <Text>Content of Tab 3</Text>;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {/* Search */}
            <View style={styles.V1}>
                {/* Add your search components here */}
            </View>

            {/* Tab View */}
            <View style={styles.tabView}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {renderTabs()}
                </ScrollView>
            </View>

            {/* Content */}
            <View style={styles.content}>
                {renderContent()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    V1: {
        // Add styles for your search bar
    },
    tabView: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tab: {
        marginRight: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    activeTab: {
        backgroundColor: '#9DDC2D',
    },
    tabText: {
        color: '#000',
    },
    content: {
        flex: 1,
        marginTop: 10,
    },
});

export default Test;
