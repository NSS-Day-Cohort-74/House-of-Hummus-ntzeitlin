# Events and State Self-Assessment

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Setup

1. Make sure you are in your `workspace` directory
1. `git clone {github repo SSH string}`
1. `cd` into the directory it creates
1. `code .` to open the project code
1. Use the `serve` command to start the web server
1. Open the URL provided in Chrome

## Requirements

### Initial Render

1. All 10 base dishes should be displayed as radio input options.
1. All 9 vegetables should be displayed as radio input options.
1. All 6 side dishes should be displayed as radio input options.
1. All previously purchases meals should be displayed below the meal options. Each purchase should display the primary key and the total cost of the purcahsed meal.

### State Management

1. When the user selects an item in any of the three columns, the choice should be stored as transient state.
1. When a user makes a choice for all three kinds of food, and then clicks the "Purchase Combo" button, a new sales object should be...
    1. Stored as permanent state in your local API.
    1. Represented as HTML below the **Monthly Sales** header in the following format **_exactly_**. Your output will not have zeroes, but the actual amount.
        ```html
        Receipt #1 = $00.00
        ```
   1. The user's choices should be cleared from transient state once the purchase is made.

## Design

Given the description and animation above...

1. Create an ERD for this application before you begin.
1. Make a list of what modules need to be created to make your application as modular as possible. Create a **Dependency Graph** for the project to be reviewed once you are complete with the assessment.
1. Create a **Sequence Diagram** that visualizes what your algorithm is for this project. We'll give you a minimal starting point.

```mermaid
sequenceDiagram
    participant Main
    Main->>Vegetables: Generate vegetable options
    Vegetables-->>Main: Here are some radio buttons
    participant Vegetables
    participant TransientState
    TransientState->>API: Save this dinner order
    API-->>TransientState: Order saved
    participant API
```

```
sequenceDiagram
    participant Main
    participant FoodTruck
    participantgroup component option modules
    participant component option modules
    participant generateButton
    participant TransientState
    participant API
    Main->FoodTruck:Generate full HTML
    FoodTruck->>component option modules: Generate radio options
    component option modules->API:what options do I need?\n
    component option modules<-API:these options
    component option modules-->>FoodTruck: Here are some radio buttons
    component option modules->TransientState:gimme ways to change you
    component option modules<-TransientState:here ways to change me
    FoodTruck->generateButton:gimme button\n
    generateButton->TransientState:lemme purchase and submit permanent change\n
    generateButton<-TransientState:ok
    FoodTruck<-generateButton:here button
    Main<<--FoodTruck:Here is that HTMl
    TransientState->>API: Save this dinner order
    API-->>TransientState: Order saved
    Main<-TransientState:LISTEN TO ME CHANGE\n
   note left of Main:ok, you change, I change   
```

## Vocabulary and Understanding

> 🧨 Before you click the "Assessment Complete" button on the Learning Platform, add your answers below for each question and make a commit. It is your option to request a face-to-face meeting with a coach for a vocabulary review.

1. Should transient state be represented in a database diagram? Why, or why not?
   > Honestly, I am not certain. Based on my current understanding, it does not seem necessary to include transient state in an ERD as it represents a temporary holding variable for a permanent state that would be in the ERD. Therefore, it would be redundant to include a transient state table in an ERD. It is useful to include the transient state in a dependency diagram, however, to show how the modules will communicate with each other. 

2. In the **FoodTruck** module, you are **await**ing the invocataion of all of the component functions _(e.g. sales, veggie options, etc.)_. Why must you use the `await` keyword there? Explain what happens if you remove it.
   > The component functions used in the FoodTruck module, with the exception of the button module, are all asynchronus functions. The await keyword ensures that the code waits for the functions to fully resolve their promises before injecting their code into the composed HTML. Without the await keyword, the invoked functions would return Promise objects instead of their resolved data.

3. When the user is making choices by selecting radio buttons, explain how that data is retained so that the **Purchase Combo** button works correctly.
   > User choices are assigned to a transientstate variable by change event listeners on each radio button. This transient state variable retains data until the purchase combo button is pressed at which time a POST request is sent to the API and the value of the transient state is passed into the permanent state of the database. 

4. You used the `map()` array method in the self assessment _(at least, you should have since it is a learning objective)_. Explain why that function is helpful as a replacement for a `for..of` loop.
   > The .map() declarative array method helps to reduce code length, makes the code more readable, and allows for chained array methods. In addition, .map automatically returns a new array, helping to protect data.
