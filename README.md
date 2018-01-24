# Hydrate

## A mobile app that reminds you to stay hydrated.

### How to Use

* Download the app
* Enable notifications
* Select how often you would like to be reminded to drink water
* The app will send you push notifications that remind you to hydrate!
* Change the settings at any time by opening the application and tapping on the setting that you would like to change.


### Sample State

```Javascript
  {
    entities: {
      frequency: 8,
      fact: "This is a placeholder for a fact about water"
    },
    ui: {
      showSetup: true,
      showSettings: true,
      time: currentTime
    }
  }
```
