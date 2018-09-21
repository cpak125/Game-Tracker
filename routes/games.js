const express = require('express');
const router = express.Router({ mergeParams: true });
const { User, Team } = require('../db/schema')
