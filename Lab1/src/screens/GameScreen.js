import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export const GameScreen = ({navigation}) => {

    const [computerScore, setComputerScore] = useState(null);
    const [firstComputerNumber, setFirstComputerNumber] = useState(null);
    const [secondComputerNumber, setSecondComputerNumber] = useState(null);

    const [playerScore, setPlayerScore] = useState(null);
    const [firstPlayerNumber, setFirstPlayerNumber] = useState(null);
    const [secondPlayerNumber, setSecondPlayerNumber] = useState(null);

    const playerRoll = () => {
        //Player's turn
        const firstPlayerNum = Math.floor(Math.random()*6) + 1;
        setFirstPlayerNumber(firstPlayerNum);
        const secPlayerNum = Math.floor(Math.random()*6) + 1;
        setSecondPlayerNumber(secPlayerNum);
        const finalPlayerNumber = firstPlayerNum + secPlayerNum;
        setPlayerScore(playerScore + finalPlayerNumber);

        // Computer's turn
        const firstCompNum = Math.floor(Math.random()*6) + 1;
        setFirstComputerNumber(firstCompNum);
        const secCompNum = Math.floor(Math.random()*6) + 1;
        setSecondComputerNumber(secCompNum);
        const finalComputerNumber = firstCompNum + secCompNum;
        setComputerScore(computerScore + finalComputerNumber);
    };

    const onPlayerDouble = () => {
        const firstPlayerNum = Math.floor(Math.random()*6) + 1;
        setFirstPlayerNumber(firstPlayerNum);
        const secPlayerNum = Math.floor(Math.random()*6) + 1;
        setSecondPlayerNumber(secPlayerNum);
        const finalPlayerNumber = firstPlayerNum + secPlayerNum;
        setPlayerScore(playerScore + finalPlayerNumber);
    };

    const onComputerDouble = () => {
        const firstCompNum = Math.floor(Math.random()*6) + 1;
        setFirstComputerNumber(firstCompNum);
        const secCompNum = Math.floor(Math.random()*6) + 1;
        setSecondComputerNumber(secCompNum);
        const finalComputerNumber = firstCompNum + secCompNum;
        setComputerScore(computerScore + finalComputerNumber);
    };

    const goAgain = () => {
        navigation.navigate('Intro')
    };

    return (
        <View style={styles.container}>
            <View style={styles.computerGame}>
                <Text style={styles.header}>Computer</Text>
                <View style={styles.blocks}>
                    <View style={styles.computersBlock}>
                        <Text style={styles.resultText}>{firstComputerNumber}</Text>
                    </View>
                    <View style={styles.computersBlock}>
                        <Text style={styles.resultText}>{secondComputerNumber}</Text>
                    </View>
                </View>
                <Text>Computer's roll: {firstComputerNumber + secondComputerNumber}</Text>
                <Text>Computer's score: {computerScore}</Text>
                {(firstComputerNumber === secondComputerNumber) && (firstComputerNumber !== null) && (secondComputerNumber !== null) ?
                    <TouchableOpacity style={styles.rollAgainButton} onPress={onComputerDouble}>
                        <Text style={styles.rollAgainButtonText}>Doubles! Computer roll again</Text>
                    </TouchableOpacity>
                    : null
                }
            </View>
            <View style={styles.playerGame}>
                <Text style={styles.header}>You</Text>
                <View style={styles.blocks}>
                    <View style={styles.playersBlock}>
                        <Text style={styles.resultText}>{firstPlayerNumber}</Text>
                    </View>
                    <View style={styles.playersBlock}>
                        <Text style={styles.resultText}>{secondPlayerNumber}</Text>
                    </View>
                </View>
                <Text>Your's roll: {firstPlayerNumber + secondPlayerNumber}</Text>
                <Text>Your's score: {playerScore}</Text>
                {(firstPlayerNumber === secondPlayerNumber) && (firstPlayerNumber !== null) && (secondPlayerNumber !== null) ?
                    <TouchableOpacity style={styles.rollAgainButton} onPress={onPlayerDouble}>
                        <Text style={styles.rollAgainButtonText}>Doubles! You roll again</Text>
                    </TouchableOpacity>
                    : null
                }
            </View>
            {((firstPlayerNumber === secondPlayerNumber) || (firstComputerNumber === secondComputerNumber)) && (firstPlayerNumber !== null) ?
                <TouchableOpacity style={styles.throwButton} onPress={playerRoll} disabled={true}>
                    <Text style={styles.throwButtonText}>Throw again</Text>
                </TouchableOpacity> :
                <TouchableOpacity style={styles.throwButton} onPress={playerRoll} disabled={false}>
                    <Text style={styles.throwButtonText}>Throw again</Text>
                </TouchableOpacity>
            }
            {(playerScore > 100) && (computerScore < 100) ?
                <View style={styles.result}>
                    <Text style={styles.resultHead}>Победа</Text>
                    <Text>Очки компьютера: {computerScore}</Text>
                    <Text>Ваши очки: {playerScore}</Text>
                    <TouchableOpacity style={styles.goAgainButton} onPress={goAgain}>
                        <Text style={styles.goAgainText}>Go Again</Text>
                    </TouchableOpacity>
                </View> : null
            }
            {(playerScore < 100) && (computerScore > 100) ?
                <View style={styles.result}>
                    <Text style={styles.resultHead}>Поражение</Text>
                    <Text>Очки компьютера: {computerScore}</Text>
                    <Text>Ваши очки: {playerScore}</Text>
                    <TouchableOpacity style={styles.goAgainButton} onPress={goAgain}>
                        <Text style={styles.goAgainText}>Go Again</Text>
                    </TouchableOpacity>
                </View> : null
            }
            {(playerScore > 100) && (computerScore > 100) ?
                <View style={styles.result}>
                    <Text style={styles.resultHead}>Ничья</Text>
                    <Text>Очки компьютера: {computerScore}</Text>
                    <Text>Ваши очки: {playerScore}</Text>
                    <TouchableOpacity style={styles.goAgainButton} onPress={goAgain}>
                        <Text style={styles.goAgainText}>Go Again</Text>
                    </TouchableOpacity>
                </View> : null
            }
        </View>
    )
};

GameScreen.navigationOptions = {
    headerTitle: 'Game'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5867dd',
    },
    header: {
      fontSize: 18
    },
    blocks: {
        flexDirection: 'row'
    },
    computerGame: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#fff'
    },
    playerGame: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#fff'
    },
    computersBlock: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        marginHorizontal: 20,
        borderRadius: 10
    },
    resultText: {
      fontSize: 24
    },
    playersBlock: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        marginHorizontal: 20,
        borderRadius: 10
    },
    throwButton: {
        height: '10%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    throwButtonText: {
        color: '#5867dd'
    },
    rollAgainButton: {
        borderRadius: 100,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    rollAgainButtonText: {
        color: '#5867dd'
    },
    result: {
        position: 'absolute',
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    goAgainButton: {
        backgroundColor: '#5867dd',
        borderRadius: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10
    },
    goAgainText: {
        color: '#fff'
    },
    resultHead: {
        fontSize: 34,
        marginBottom: 10
    }
});