/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//http://www.raymondcamden.com/2013/05/24/PhoneGap-OnlineOffline-Tip

var appIntroWrapper = document.getElementById('phone-app');
var appMessageWrapper = document.getElementById('message');

document.querySelector('#message .close').onclick = function(){
    onlineHandler();
}

function addMessageWrapper(){
    $('body').append('<div class="message hide" id="message">The device is offline. Please check your network connection.<button type="button" class="close" data-dismiss="alert">×</button></div>');
    appMessageWrapper = document.getElementById('message');
    document.querySelector('#message .close').onclick = function(){
        onlineHandler();
    }
}

function appLoadSuccess(){
    /*
    setTimeout(function(){
        appIntroWrapper.className = 'app';
        loadIframe();
    }, 60);
    */
	if(!navigator.onLine) {
		navigator.notification.alert("Sorry, you are offline.", function() {
		appLoadSuccess();
		}, "Offline!");
	} else {
		//setTimeout(function(){window.location = 'http://hug-meem.procab-studio.com/';}, 50);
		
		setTimeout(function(){window.location = 'http://codalis.ch/test/test.html';}, 50); //
		//setTimeout(function(){window.location = 'http://www.monenfantestmalade.ch/';}, 50); //
		
	}
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


var isTest = getParameterByName('test');
if(isTest=='1') appLoadSuccess();

function onlineHandler(){
    appMessageWrapper.className = 'message hide';
}

function offlineHandler(){
    appMessageWrapper.className = 'message show';
}

/*
function toggleCon(e) {
	console.log("Called",e.type);
	if(e.type == "offline") {
		navigator.notification.alert("Sorry, you are offline.", function() {}, "Offline!");
	} else {
		navigator.notification.alert("Woot, you are back online.", function() {}, "Online!");
		//setupButtonHandler();
	}
}
*/

var app = {
    // Application Constructor
    initialize: function() {
        appIntroWrapper.className += ' app-load';
        
		//var callbck = function(){
		this.bindEvents();
		//}
		
		
        
	   
        
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("online", onlineHandler, false);
	    document.addEventListener("offline", offlineHandler, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /*
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        */
        StatusBar.hide();
        appLoadSuccess();
    }
};
