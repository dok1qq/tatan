#!/bin/bash

echo Builing application...;
npm run build;

echo Deploy application...;
npm run deploy;

echo Cleanup...;
rmdir /Q dist;
