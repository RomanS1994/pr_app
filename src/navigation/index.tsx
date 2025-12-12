import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NotFound } from "./screens/NotFound";
import Home from "./screens/BottomTabsScreens/Home";
import { Profile } from "./screens/ProfileScreens/Profile";

import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import RouteHome from "./screens/RouteScreens/RouteHome";
import ChooseCar from "./screens/RouteScreens/ChooseCar";
import Payment from "./screens/RouteScreens/Payment";
import Success from "./screens/RouteScreens/Success";
import HomeTrip from "./screens/RouteScreens/HomeTrip";
import colors from "../theme/colors";

import TransferDetails from "./screens/ProfileScreens/TransferDetails";
import TransfersList from "./screens/ProfileScreens/TransfersList";

const RouteStack = createNativeStackNavigator({
  screens: {
    HomeTrip: {
      screen: HomeTrip,
      options: {
        headerShown: false,

        title: "HomeTrip",
      },
    },
    RouteHome: {
      screen: RouteHome,
      options: {
        headerShown: false,

        title: "RouteHome",
      },
    },
    ChooseCar: {
      screen: ChooseCar,
      options: {
        headerShown: false,

        title: "ChooseCar",
      },
    },
    Payment: {
      screen: Payment,
      options: {
        headerShown: false,

        title: "Payment",
      },
    },
    Success: {
      screen: Success,
      options: {
        title: "Success",
      },
    },
  },
});
const ProfileStack = createNativeStackNavigator({
  screens: {
    Profile: {
      screen: Profile,
      options: {
        headerShown: false,

        title: "HomeTrip",
      },
    },
    TransfersList: {
      screen: TransfersList,
      options: {
        // headerShown: false,

        title: "TransfersList",
      },
    },
    TransferDetails: {
      screen: TransferDetails,
      options: {
        // headerShown: false,

        title: "TransferDetails",
      },
    },
  },
});

const HomeTabs = createBottomTabNavigator({
  screenOptions: {
    tabBarActiveTintColor: colors.accent, // колір іконки/лейблу активної вкладки
    tabBarInactiveTintColor: colors.grey, // неактивні
  },
  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false,

        title: "Home",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="house" color={color} size={size} />
        ),
      },
    },
    My_Routes: {
      screen: RouteStack,
      options: {
        headerShown: false,
        title: "My Routes",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="highway" color={color} size={size} />
        ),
      },
    },
    ProfileStack: {
      screen: ProfileStack,
      options: {
        headerShown: false,

        title: "Profile",
        tabBarIcon: ({ color, size }) => (
          <FontAwesome6 name="user" color={color} size={size} />
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: "Homes",
        headerShown: false,
      },
    },

    NotFound: {
      screen: NotFound,
      options: {
        title: "404",
      },
      linking: {
        path: "*",
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
