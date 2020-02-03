#!/bin/bash

# Read environment variables from .env files
read_var() {
    VAR=$(grep $1 $2 | xargs)
    IFS="=" read -ra VAR <<< "$VAR"
    echo ${VAR[1]}
}

FILE="../assets/grant/js/events.js"
DATE=`date +"%m/%d/%Y %T"`

# Load Airtable Key
KEY=$(read_var AIRTABLE_KEY .env)

touch $FILE
echo "rawEventData = \`[" > $FILE
echo $(curl "https://api.airtable.com/v0/appfqDfMFzsUfMq14/List?view=API&fields=Event+Name&fields=Website" -H "Authorization: Bearer $KEY") >> $FILE
echo "]\`;" >> $FILE
echo "var dataTimestamp = \"$DATE\";" >> $FILE