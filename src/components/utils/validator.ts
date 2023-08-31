import React from "react";


export const required = (value: any) => {

 return   value ? undefined : 'error message'



}
export const maxLengthCreator = (maxLength: any) => (value: any) => {

 return    value.length > maxLength ? 'Max length is 30 symbols' : undefined



}