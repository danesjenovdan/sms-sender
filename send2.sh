adb shell am start -a android.intent.action.SENDTO -d sms:$NUMBER --es sms_body "$CONTENT" --ez exit_on_sent true
sleep 0.5
adb shell input keyevent 61
sleep 0.5
adb shell input keyevent 66