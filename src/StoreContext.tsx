import React from "react";
import {StateType, StoreType} from "./redux/store";
type StoreValueType = {
    // Define the properties and their types that will be stored in the context
    foo: string;
    bar: number;
};

export const StoreContext = React.createContext<any | null>(null);