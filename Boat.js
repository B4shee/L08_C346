import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Boat = ({name, description, icon_name, icon_color, picture }) => {
    return (
        <View style={styles.card}>
            {/* Header row with icon and boat name using Flexbox */}
            <View style={styles.titleContainer}>
                <FontAwesome6 name={icon_name} size={22} color={icon_color} style={styles.icon} />
                <Text style={styles.boatName}>{name}</Text>
            </View>

            {/* Description text */}
            <Text style={styles.description}>{description}</Text>

            {/* Boat Image */}
            <Image source={picture} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
        elevation: 4,
        borderWidth: 1,
        borderColor: '#dee2e6',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f3f5',
        paddingBottom: 8,
    },
    icon: {
        marginRight: 10,
    },
    boatName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#212529',
        flex: 1,
    },
    description: {
        fontSize: 13.5,
        color: '#495057',
        lineHeight: 20,
        marginBottom: 14,
    },
    image: {
        width: '100%',
        height: 220,
        borderRadius: 8,
        resizeMode: 'cover',
    },
});

export default Boat;