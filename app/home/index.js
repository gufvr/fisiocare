import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const index = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: insets.top }}>
      <StatusBar style="dark" />
      <ScrollView>
        <LinearGradient
          colors={["#FE7FCE", "#E9E4F0"]}
          style={{ flex: 1 }}
        >
          <View style={{ padding: 12 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Feather name="bar-chart" size={24} color="" />
              <Text style={{ fontSize: 16, fontWeight: "600", color: "#FFF" }}>Gestão de pacientes</Text>
              <Entypo name="lock" size={24} color="white" />
            </View>

            <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", gap: 20 }}>
              <Pressable
                style={{
                  backgroundColor: "#fff5fe",
                  padding: 12,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1
                }}>
                <View style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#FFF",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Ionicons name="people-sharp" size={24} color="#8FE0C2z" />
                </View>
                <Text style={{ marginTop: 7, fontWeight: "600" }}>Lista de pacientes</Text>
              </Pressable>
              <Pressable
                style={{
                  backgroundColor: "#fff5fe",
                  padding: 12,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1
                }}>
                <View style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#FFF",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <AntDesign name="checkcircle" size={24} color="black" />
                </View>
                <Text style={{ marginTop: 7, fontWeight: "600" }}>Marcar presença</Text>
              </Pressable>
            </View>
            <View>
              <Pressable style={{
                backgroundColor: "#00c6a9",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10
              }}>

                <View style={{ padding: 7, width: 45, borderRadius: 7, backgroundColor: "#FFF", alignItems: "center", justifyContent: "center" }}>
                  <Ionicons name="newspaper-outline" size={24} color="black" />
                </View>
                <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600", color: "#FFF" }}>Relatório de presença</Text>
                <View style={{ width: 35, height: 35, borderRadius: 7, backgroundColor: "#FFF", alignItems: "center", justifyContent: "center" }}>
                  <Entypo name="chevron-right" size={24} color="black" />
                </View>
              </Pressable>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

// const styles = StyleSheet.create({})