require("dotenv").config();
import request from "request";

const MY_VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const WHATSAPP_API_TOKEN = process.env.WHATSAPP_API_TOKEN;

let getHomepage = (req, res) => {
    return res.render("homepage.ejs");
};



// Function to handle Browse Collections action
let handleRings = (sender_number) => {
    console.log("User clicked Rings.");

    // Construct the response message with the web_url button
    let response = {
        "type": "list",
        "header": {
            "type": "text",
            "text": "Rings Collections ✨"
        },
        "body": {
            "text": "Click the link to explore Rings collection: https://lime-petronilla-96.tiiny.site/"
        },
        "footer": {
            "text": "✨ "
        },
        "action": {
            "button": "Other Options",
            "sections": [
                {
                    "title": "Browse Collections",
                    "rows": [
                        {
                            "id": "rings",
                            "title": "Rings",
                            "description": "Browse our exquisite rings collection."
                        },
                        {
                            "id": "bracelets",
                            "title": "Bracelets",
                            "description": "Discover our latest bracelet designs."
                        },
                        {
                            "id": "earrings",
                            "title": "Earrings",
                            "description": "Explore our elegant earrings selection."
                        },
                        {
                            "id": "necklaces",
                            "title": "Necklaces",
                            "description": "View our stunning necklace designs."
                        }
                    ]
                },
                {
                    "title": "Other Options",
                    "rows": [
                        {
                            "id": "visit",
                            "title": "Visit Our Website",
                            "description": "Visit our website Explore more"
                        },
                        
                    ]
                }
            ]
        }
    };
    // Send the response back to the user
    sendWhatsAppMessage(sender_number, response);
};


let handleEarrings = (sender_number) => {
    console.log("User earrings button.");
    let response = {
        "type": "list",
        "header": {
            "type": "text",
            "text": "Earrings Collections ✨"
        },
        "body": {
            "text": `Click the link to explore Earrings collection:
https://lime-petronilla-96.tiiny.site/`
        },
        "footer": {
            "text": "✨ "
        },
        "action": {
            "button": "Other Options",
            "sections": [
                {
                    "title": "Browse Collections",
                    "rows": [
                        {
                            "id": "rings",
                            "title": "Rings",
                            "description": "Browse our exquisite rings collection."
                        },
                        {
                            "id": "bracelets",
                            "title": "Bracelets",
                            "description": "Discover our latest bracelet designs."
                        },
                        {
                            "id": "earrings",
                            "title": "Earrings",
                            "description": "Explore our elegant earrings selection."
                        },
                        {
                            "id": "necklaces",
                            "title": "Necklaces",
                            "description": "View our stunning necklace designs."
                        }
                    ]
                },
                {
                    "title": "Other Options",
                    "rows": [
                        {
                            "id": "visit",
                            "title": "Visit Our Website",
                            "description": "Visit our website Explore more"
                        },
                        
                    ]
                }
            ]
        }
    };
    // Send the response back to the user
    sendWhatsAppMessage(sender_number, response);
};


let handleNecklaces = (sender_number) => {
    console.log("User necklace button.");
    let response = {
        "type": "list",
        "header": {
            "type": "text",
            "text": "Necklace Collections ✨"
        },
        "body": {
            "text": `Click the link to explore Necklace collection:
https://lime-petronilla-96.tiiny.site/`
        },
        "footer": {
            "text": "✨ "
        },
        "action": {
            "button": "Other Options",
            "sections": [
                {
                    "title": "Browse Collections",
                    "rows": [
                        {
                            "id": "rings",
                            "title": "Rings",
                            "description": "Browse our exquisite rings collection."
                        },
                        {
                            "id": "bracelets",
                            "title": "Bracelets",
                            "description": "Discover our latest bracelet designs."
                        },
                        {
                            "id": "earrings",
                            "title": "Earrings",
                            "description": "Explore our elegant earrings selection."
                        },
                        {
                            "id": "necklaces",
                            "title": "Necklaces",
                            "description": "View our stunning necklace designs."
                        }
                    ]
                },
                {
                    "title": "Other Options",
                    "rows": [
                        {
                            "id": "visit",
                            "title": "Visit Our Website",
                            "description": "Visit our website Explore more"
                        },
                        
                    ]
                }
            ]
        }
    };
    // Send the response back to the user
    sendWhatsAppMessage(sender_number, response);
};

let handleBracelets = (sender_number) => {
    console.log("User bracelets button.");

    let response = {
        "type": "list",
        "header": {
            "type": "text",
            "text": "Bracelets Collections ✨"
        },
        "body": {
            "text": `Click the link to explore Bracelets collection:
https://lime-petronilla-96.tiiny.site/`
        },
        "footer": {
            "text": "✨ "
        },
        "action": {
            "button": "Other Options",
            "sections": [
                {
                    "title": "Browse Collections",
                    "rows": [
                        {
                            "id": "rings",
                            "title": "Rings",
                            "description": "Browse our exquisite rings collection."
                        },
                        {
                            "id": "bracelets",
                            "title": "Bracelets",
                            "description": "Discover our latest bracelet designs."
                        },
                        {
                            "id": "earrings",
                            "title": "Earrings",
                            "description": "Explore our elegant earrings selection."
                        },
                        {
                            "id": "necklaces",
                            "title": "Necklaces",
                            "description": "View our stunning necklace designs."
                        }
                    ]
                },
                {
                    "title": "Other Options",
                    "rows": [
                        {
                            "id": "visit",
                            "title": "Visit Our Website",
                            "description": "Visit our website Explore more"
                        },
                        
                    ]
                }
            ]
        }
    };
    //response
    sendWhatsAppMessage(sender_number, response);
};


// visit Website action
let handleVisitWebsite = (sender_number) => {
    console.log("User clicked Visit Website button.");

    let response = {
        "type": "list",
        "header": {
            "type": "text",
            "text": "Visit Our Website ✨"
        },
        "body": {
            "text": `Click the link to visit our website:
https://tajvigold.com/`
        },
        "footer": {
            "text": "✨ "
        },
        "action": {
            "button": "Other Options",
            "sections": [
                {
                    "title": "Browse Collections",
                    "rows": [
                        {
                            "id": "rings",
                            "title": "Rings",
                            "description": "Browse our exquisite rings collection."
                        },
                        {
                            "id": "bracelets",
                            "title": "Bracelets",
                            "description": "Discover our latest bracelet designs."
                        },
                        {
                            "id": "earrings",
                            "title": "Earrings",
                            "description": "Explore our elegant earrings selection."
                        },
                        {
                            "id": "necklaces",
                            "title": "Necklaces",
                            "description": "View our stunning necklace designs."
                        }
                    ]
                },
                {
                    "title": "Other Options",
                    "rows": [
                        {
                            "id": "visit",
                            "title": "Visit Our Website",
                            "description": "Visit our website Explore more"
                        },
                        
                    ]
                }
            ]
        }
    };
    // Send response to the user
    sendWhatsAppMessage(sender_number, response);
};

// Function for other button actions if needed
let handleOtherAction = (sender_number, buttonId) => {
    // Your logic for handling other button actions
    console.log("User clicked button with ID: " + buttonId);
};





// fn handles incoming messages from WhatsApp
let handleWhatsAppMessage = (sender_number, messageObj) => {
     // check if the message is of type interactive
     if (messageObj && messageObj.type === 'interactive') {
        // extract the interactive payload
        let interactive = messageObj;
        console.log('interactiveee',interactive);
        // Process the interactive message
        if (interactive ) {
            let  buttonId  = interactive.interactive.list_reply.id;
            console.log('button Id',buttonId);

                //     checksthe ID of the clicked button
                    // Handle different actions based on the button ID
                    switch (buttonId) {
                        case "rings":
                            // Handle Browse Collections action
                            handleRings(sender_number);
                            break;
                        case "bracelets":
                            // Handle Browse Collections action
                            handleBracelets(sender_number);
                            break;    
                        case "earrings":
                            // Handle Browse Collections action
                            handleEarrings(sender_number);
                            break;
                        case "necklaces":
                            // Handle Browse Collections action
                            handleNecklaces(sender_number);
                            break;        
                        case "visit":
                            // Handle Visit Website action
                            handleVisitWebsite(sender_number);
                            break;
                        default:
                            // Handle other button actions if needed
                            handleOtherAction(sender_number, buttonId);
                            break;
                    
        }
    }else {
            console.error('Unsupported or malformed interactive message payload.');
        }
    }
    else {
        // This is the initial message, so send the welcome message with the dropdown
        let welcome_message = "Welcome to our store! How can we assist you today?";
        let template = {
            "type": "list",
            "header": {
                "type": "text",
                "text": "🌟Welcome to Tajvi Gold..."
            },
            "body": {
                "text": "Explore our stunning collection and add a touch of elegance to your style."
            },
            "footer": {
                "text": "✨ Discover timeless beauty today!"
            },
            "action": {
                "button": "Tap to Browse",
                "sections": [
                    {
                        "title": "Browse Collections",
                        "rows": [
                            {
                                "id": "rings",
                                "title": "Rings",
                                "description": "Browse our exquisite rings collection."
                            },
                            {
                                "id": "bracelets",
                                "title": "Bracelets",
                                "description": "Discover our latest bracelet designs."
                            },
                            {
                                "id": "earrings",
                                "title": "Earrings",
                                "description": "Explore our elegant earrings selection."
                            },
                            {
                                "id": "necklaces",
                                "title": "Necklaces",
                                "description": "View our stunning necklace designs."
                            }
                        ]
                    },
                    {
                        "title": "Other Options",
                        "rows": [
                            {
                                "id": "visit",
                                "title": "Visit Our Website",
                                "description": "Visit our website Explore more"
                            },
                            
                        ]
                    }
                ]
            }
        };
        // Send the template message back to the user
        sendWhatsAppMessage(sender_number, template);
    }
};




// Function to handle incoming postbacks from WhatsApp
let handleWhatsAppPostback = (sender_number, postback) => {
    // Extract postback payload
    let payload = postback.payload;
    
    if (payload) {
        // Redirect the user based on the payload
        switch (payload) {
            case 'rings':
            case 'bracelets':
            case 'earrings':
            case 'necklaces':
                // Redirect the user to the specified URL
                sendWhatsAppMessage(sender_number, "https://lime-petronilla-96.tiiny.site/");
                break;
            default:
                // Handle other postback payloads if needed
                break;
        }
    } else {
        console.error("No payload found in the postback event.");
    }
};



// Function to send a message via WhatsApp
let sendWhatsAppMessage = (recipient_number, message) => {
    // Construct the request body
    let request_body = {
        "to": recipient_number,
        "type": "interactive",
        "recipient_type": "individual",
        "messaging_product": "whatsapp",
        "interactive": message // Pass the template message directly
    };

    // Send the HTTP request to the WhatsApp API
    request({
        uri: "https://graph.facebook.com/v18.0/194105810463783/messages",
        qs: { access_token: WHATSAPP_API_TOKEN },
        method: "POST",
        json: request_body
    }, (err, res, body) => {
        if (!err) {
            console.log('WhatsApp message sent!');
            console.log('res',res);
            console.log('body',body);
        } else {
            console.error("Unable to send WhatsApp message: " + err);
        }
    });
};



///////



let getWebhook = (req, res) => {

    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = MY_VERIFY_TOKEN;

    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    // Checks if a token and mode is in the query string of the request
    if (mode && token) {

        // Checks the mode and token sent is correct
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {

            // Responds with the challenge token from the request
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);

        } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
};



//new postwebhook
let postWebhook = (req, res) => {
    // Parse the request body from the POST
    let body = req.body;

    // Check if the webhook event is from a Page subscription (Facebook Messenger)
    if (body.object === 'page') {
        // Iterate over each entry - there may be multiple if batched
        body.entry.forEach(function(entry) {
            // Gets the body of the webhook event
            let webhook_event = entry.messaging[0];
            console.log(webhook_event);
            // Get the sender PSID
            let sender_psid = webhook_event.sender.id;
            console.log('Sender PSID: ' + sender_psid);
            // Check if the event is a message or postback and
            // pass the event to the appropriate handler function
            if (webhook_event.message) {
                handleMessage(sender_psid, webhook_event.message);
            } else if (webhook_event.postback) {
                handlePostback(sender_psid, webhook_event.postback);
            }
        });
    }
    // Check if the webhook event is from WhatsApp
    else if (body.object === 'whatsapp_business_account') {
        // Iterate over each entry - there may be multiple if batched
        body.entry.forEach(function(entry) {
            // Handle WhatsApp webhook events here
            // You can extract and process the necessary information from the entry
            // For example, you can extract sender number, message, etc.
            let whatsapp_event = entry.changes[0].value;
            console.log(whatsapp_event);
            
            // Check if the messages array exists in whatsapp_event
            if (whatsapp_event && whatsapp_event.messages && whatsapp_event.messages.length > 0 ) {
                console.log('message type',whatsapp_event.messages[0].type);
                console.log('whatsevent 1 ', whatsapp_event);

                let sender_number = whatsapp_event.messages[0].from;
                // let messageType = whatsapp_event.messages[0].type;
                let messageObj = whatsapp_event.messages[0];
                // let message = whatsapp_event.messages[0].text.body;
                
                console.log('whatsevent ', whatsapp_event.message_body);
                // Call the function to handle the incoming WhatsApp message
                handleWhatsAppMessage(sender_number, messageObj);
            } 
            else if (whatsapp_event && whatsapp_event.postback) {
                let sender_number = whatsapp_event.sender.id;
                let postback = whatsapp_event.postback;
                console.log('////////******inside interactiveeeee ');
                console.log('whatsevent ', whatsapp_event);
                // Call the function to handle the incoming WhatsApp postback
                handleWhatsAppPostback(sender_number, postback);
            }            
            else {
                console.error('No messages found in the WhatsApp event.');
            }
        });
    }
    
    // Return a '200 OK' response to all events
    res.status(200).send('EVENT_RECEIVED');
};


// Handles messages events
let handleMessage = (sender_psid, received_message) => {
    let response;
    // Checks if the message contains text
    if (received_message.text) {
        // Create the payload for a message with initial text and buttons
        response = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "button",
                    "text": `Hi! Thanks for reaching out...
Welcome to Tajvi Gold
                    `,
                    "buttons": [
                        {
                            "type": "postback",
                            "title": "Browse Collection",
                            "payload": "browse_collection"
                        },
                        {
                            "type": "web_url",
                            "url": "https://www.tajvigold.com",
                            "title": "Visit Our Website"
                        },
                        {
                            "type": "web_url",
                            "url": "https://wa.me/917806841918?text=Hai",
                            "title": "Connect on Whatsapp"
                        }
                    ]
                }
            }
        }
    }
    
    // Send the response message
    callSendAPI(sender_psid, response);
};


// Handles messaging_postbacks events
let handlePostback = (sender_psid, received_postback) => {
    let response;

    // Get the payload for the postback
    let payload = received_postback.payload;

    // Set the response based on the postback payload
    if (payload === 'browse_collection') {
        // Handle "Browse collection" postback
        
        response = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "button",
                    "text": `Our Collections`,
                    "buttons": [
                        {
                            "type": "web_url",
                            "url": "https://lime-petronilla-96.tiiny.site/",
                            "title": "Rings"
                        },
                        {
                            "type": "web_url",
                            "url": "https://lime-petronilla-96.tiiny.site/",
                            "title": "Earrings"
                        },
                        {
                            "type": "web_url",
                            "url": "https://lime-petronilla-96.tiiny.site/",
                            "title": "Bracelets"
                        },
                        
                        
                    ]
                }
            }
        }
    } else if (payload === 'visit_website') {
        // Handle "Visit our website" postback
        response = {
            "text": "Visit our website:",
            "buttons": [
                {
                    "type": "web_url",
                    "url": "https://www.sampleurl.com",
                    "title": "Visit Website"
                }
            ]
        };
    } else if (payload === 'rings') {
        // Handle "Rings" postback
        // Here you can send a PDF document
        response = {
            "attachment": {
                "type": "file",
                "payload": {
                    "url": "https://tiiny.host/manage",
                    "is_reusable": true
                }
            }
        };
    } else {
        // If the payload is not recognized
        response = { "text": "Payload not recognized!" };
    }

    // Send the message to acknowledge the postback
    callSendAPI(sender_psid, response);
};


// Sends response messages via the Send API
let callSendAPI = (sender_psid, response) => {
    // Construct the message body
    let request_body = {
        "recipient": {
            "id": sender_psid
        },
        "message": response
    };

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": "https://graph.facebook.com/v6.0/me/messages",
        "qs": { "access_token": PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        if (!err) {
            console.log('message sent!')
        } else {
            console.error("Unable to send message:" + err);
        }
    });
};
module.exports = {
    getHomepage: getHomepage,
    getWebhook: getWebhook,
    postWebhook: postWebhook,
    // postWhatsAppWebhook: postWhatsAppWebhook

};
