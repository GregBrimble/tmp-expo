import tailwindTheme from '../../tailwindTheme.json'
import React, {
  ComponentType,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  ForwardedRef,
  createRef,
  RefObject,
  MutableRefObject,
} from 'react'
import {
  useDimensions,
  useActive,
  useFocus,
  useHover,
} from 'react-native-web-hooks'
import { StyleProp, Text } from 'react-native'

const x = Object.keys(tailwindTheme.screens)

type AnyStyles = any

type StyleableProps<Style> = {
  style?: StyleProp<Style>
}

// TODO: Others & dynamically pull from theme
type ResponsiveVariant = keyof tailwindTheme.screens
type OptionalResponsiveVariant = `${ResponsiveVariant}:` | ''

type StateVariant = 'active' | 'focus' | 'hover'
type OptionalStateVariant = `${StateVariant}:` | ''

type ClassNames = 'text-blue-600'

type ClassNameObject = {
  className: ClassNames
  stateVariant?: StateVariants
  responsiveVariant?: ResponsiveVariant
}

type withTWRNProps = {
  className?: `${OptionalResponsiveVariant}${OptionalStateVariant}${ClassNames}`
}

type withTWRNForwardedRefProps<WrappedComponentType> = {
  forwardedRef?: ForwardedRef<WrappedComponentType>
}

const assertIsNotCallbackRef = <C,>(
  ref?: ForwardedRef<C>,
): ref is MutableRefObject<C> | null | undefined => {
  if (typeof ref === 'function')
    throw new Error('Callback refs are not currently supported.')

  return true
}

export const withTWRN = <
  WrappedComponentProps extends StyleableProps<AnyStyles>
>(
  WrappedComponent: ComponentType<WrappedComponentProps>,
): ForwardRefExoticComponent<
  PropsWithoutRef<WrappedComponentProps & withTWRNProps> &
    RefAttributes<ComponentType<WrappedComponentProps>>
> => {
  const Component = (
    props: WrappedComponentProps &
      withTWRNProps &
      withTWRNForwardedRefProps<ComponentType<WrappedComponentProps>>,
  ) => {
    const { className, forwardedRef, style, ...otherProps } = props

    // TODO: Support callback refs
    assertIsNotCallbackRef(forwardedRef)
    const ref = (forwardedRef || createRef()) as MutableRefObject<
      ComponentType<WrappedComponentProps>
    >

    const dimensions = useDimensions()
    const active = useActive(ref)
    const focus = useFocus(ref)
    const hover = useHover(ref) // TODO: Support iPad touchpad hovering (https://www.npmjs.com/package/@thefunbots/react-native-pointer-interactions)

    const responsiveVariants = ['md'] // TODO: Dynamic and others
    const stateVariants = ['active', 'focus', 'hover'] // TODO: All the others

    const styles: StyleProp<ComponentType<WrappedComponentProps>>[] = []

    const parseClassName = (className: string): ClassNameObject => {
      const parts = className.split(':')
      let responsiveVariant, stateVariant, extractedClassName: string

      if (parts.length === 1) {
        extractedClassName = parts[0]
      } else if (parts.length === 2) {
        extractedClassName = parts[1]
        if (stateVariants.includes(parts[0])) {
          stateVariant = parts[0]
        } else {
          responsiveVariant = parts[0]
        }
      } else if (parts.length === 3) {
        responsiveVariant = parts[0]
        stateVariant = parts[1]
        extractedClassName = parts[2]
      } else {
        throw new Error(`Could not parse '${className}'`)
      }

      return {
        className: extractedClassName,
        stateVariant,
        responsiveVariant,
      }
    }

    const filterClassNameObjects = ({
      className,
      responsiveVariant,
      stateVariant,
    }: ClassNameObject) => {
      if (responsiveVariant) {
        if (
          dimensions.screen.width <= tailwindTheme.screens[responsiveVariant]
        ) {
        }
      }

      return true
    }

    if (className !== undefined) {
      const classNames = className.split(' ')
      for (const className of classNames) {
        const match = parseClassName(className)
        console.log(match)
      }
    }

    styles.push(style)

    return (
      <>
        <WrappedComponent
          ref={ref}
          style={styles}
          {...(otherProps as WrappedComponentProps)}
        />
      </>
    )
  }

  return forwardRef<
    ComponentType<WrappedComponentProps>,
    WrappedComponentProps & withTWRNProps
  >((props, ref) => <Component forwardedRef={ref} {...props} />)
}
