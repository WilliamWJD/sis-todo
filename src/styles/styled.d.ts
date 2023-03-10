import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            gray_700: string
            gray_600: string
            gray_500: string
            gray_400: string
            gray_300: string
            gray_200: string
            gray_100: string

            purple: string,
            purpleDark: string,
            blue: string,
            blueDark: string,
            danger: string
        }
    }
}