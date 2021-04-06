import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from 'react-native'
import * as yup from 'yup';
import { Dimensions } from "react-native";

import Form from '../formComp/Form'
import FormModal from '../formComp/FormModal';
import FormTextInput from '../formComp/FormTextInput'
import FormTitle from '../formComp/FormTitle'
import Help_Button from '../formComp/Help_Button';
import Help_Text from '../formComp/Help_Text';
import SubmitButton from '../formComp/SubmitButton';

const SignIn_validationSchema=yup.object().shape(
{
 Email:yup.string().email().required().label("Email"),
 Password:yup.string().required().min(4).label("Password")
}
) 
 const window = Dimensions.get("window");
 const screen = Dimensions.get("screen");

export default function SignInForm({visible,setVisible}) {
    const [dimensions, setDimensions] = useState({ window, screen }); 

    return (
      <FormModal visible={visible} onClosed={()=>setVisible(false)}   >
        <View style={styles.container}>
          <Form
            validationSchema={SignIn_validationSchema}
            initialValues={{
              Email: "",
              Password: "",
            }}
          >
            <FormTitle title="Sign In" />

            <View style={styles.inputs_Container}>
              <FormTextInput
                name="Email"
                title="Email"
                icon="email"
                width={80}
              />

              <FormTextInput
                name="Password"
                title="Password"
                icon="email"
                width={80}
                secret={true}
              />
            </View>

            <SubmitButton
              backgroundcolor="primary"
              title="Sign Up"
              width={80}
              
            />
            <View style={styles.help_Container}>
              <Help_Text title="New User ?  " />
              <Help_Button title="Sign Up " />
            </View>
          </Form>
        </View>
      </FormModal>
    );     
}

const styles = StyleSheet.create({
    container :{
       flex: 1,
        padding:10,
        paddingTop:20,
        paddingBottom :30,
     
    },
    inputs_Container :{
        justifyContent:'center',
        alignItems:'center',
        marginBottom :10,
        width:"100%"
    },
      help_Container :{
    flexDirection:"row",
    marginTop:17,
    width:"100%",
    justifyContent :'center',
    alignItems:'center',
    },
  
})
