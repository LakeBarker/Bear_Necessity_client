import React, { useState, useEffect } from "react"
import { Form, Container, Message, Modal, Dropdown } from "semantic-ui-react"
import { useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker"
import Select from "react-select"
import "react-datepicker/dist/react-datepicker.css"
import { Button } from "react-bootstrap"

/////// import post route for Event from ./api/api_calls.js