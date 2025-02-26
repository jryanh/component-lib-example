import Button, { ButtonProps } from '@mui/material/Button'

export const CustomButton = (props: ButtonProps) => {
  return <Button {...props}>{props.children}</Button>
}

export const PrimaryButton = (props: ButtonProps) => {
  return (
    <Button variant="contained" {...props}>
      {props.children}
    </Button>
  )
}

export const SecondaryButton = (props: ButtonProps) => {
  return (
    <Button variant="contained" color="error" style={{ border: '1px solid red' }} {...props}>
      {props.children}
    </Button>
  )
}
