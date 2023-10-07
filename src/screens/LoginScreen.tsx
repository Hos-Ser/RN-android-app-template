import React, { useContext } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Formik } from "formik";
import * as Yup from "yup";

import { RootDrawerParams } from "../types";
import { colorPalette, textFormat } from "../config";
import { AppInput } from "../components";
import { UserContext } from "../contexts";

type Props = NativeStackScreenProps<RootDrawerParams, "Login">;

const validationSchema = Yup.object({
  email: Yup.string().required("Fill in field").email("Email is not valid"),
  password: Yup.string()
    .required("Fill in field")
    .min(4, "Password is too small"),
});

export default function LoginScreen({}: Props) {
  const user = useContext(UserContext);

  return (
    <View style={styles.centeredContainer}>
      {user?.user.username ? (
        <>
          <Button
            title="Log Out"
            onPress={() =>
              user?.setUser({
                email: "",
                name: "",
                username: "",
              })
            }
          />
        </>
      ) : (
        <>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              user?.setUser({
                email: values.email,
                name: "asd",
                username: values.password,
              });
            }}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <View style={styles.formField}>
                <AppInput
                  onChangeText={handleChange("email")}
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  placeholder="Email"
                  onBlur={() => setFieldTouched("email")}
                />
                {errors.email && touched.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
                <AppInput
                  onChangeText={handleChange("password")}
                  textContentType="password"
                  keyboardType="default"
                  placeholder="Password"
                  secureTextEntry={true}
                  onBlur={() => setFieldTouched("password")}
                />
                {errors.password && touched.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
                <Button title="Submit" onPress={() => handleSubmit()} />
              </View>
            )}
          </Formik>
          <Text style={{ color: "white" }}>{user?.user.email}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorPalette.secondary,
  },
  error: {
    fontSize: textFormat.sizeMed,
    color: colorPalette.red,
    textAlign: "right",
    paddingRight: 16,
  },
  formField: {
    width: "100%",
    paddingHorizontal: 10,
  },
});
