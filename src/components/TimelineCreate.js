import React, { useState, useEffect } from "react"
import { Form, Container, Message, Modal, Dropdown } from "semantic-ui-react"
import { useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker"
import Select from "react-select"
import "react-datepicker/dist/react-datepicker.css"
import { Button } from "react-bootstrap"
////// import postTimeline from ../api/timeline
import { postTimeline } from "../api/timeline"
import { timelineIndex } from "./api/timeline"

const TimelineCreate = (props) => {
        useEffect(() => {
            timelineIndex()
                .then((res) => {
                    let owner = res.data.owner

                    const 
                })
        })
}