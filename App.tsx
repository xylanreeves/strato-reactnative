import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { MY_ACCOUNT_ID, MY_PRIVATE_KEY } from '@env'

import { Account, ApiSession } from '@buidlerlabs/hedera-strato-js'

export default function App() {
  useEffect(() => {
    initSession()
  }, [])

  async function initSession() {
    const { session } = await ApiSession.default({
      wallet: {
        sdk: {
          operatorId: MY_ACCOUNT_ID,
          operatorKey: MY_PRIVATE_KEY
        }
      },
    });
    const liveAccount = await session.create(new Account())

    console.log(liveAccount.id)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
