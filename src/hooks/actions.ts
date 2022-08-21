import { bindActionCreators } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils"
import { useDispatch } from "react-redux"
import { githubActions } from "../store/github/github.slice"

const actions = {
  ...githubActions
}

export const useActions =() => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}