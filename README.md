# insinsomnia-plugin-sanitize-url-html
Remove HTML entities from a URL in [Insomnia REST Client](https://insomnia.rest), and replace it with its corresponding symbol. 
## Installation
### From Insomnia Plugin Hub
1. Navigate to [https://insomnia.rest/plugins/insinsomnia-plugin-sanitize-url-html](https://insomnia.rest/plugins/insinsomnia-plugin-sanitize-url-html)
2. Click Install Plugin
3. Click Open
4. Once opened, click Install
### From the Insomnia App
1. Go to Application > Preferences **or** click the cog icon (⚙️)
2. Navigate to the Plugins tab
3. Enter `insinsomnia-plugin-sanitize-url-html`
4. Click Install
### Manual Install
1. Using a terminal, `cd` into your Insomnia plugins folder - [see Insomnia Docs](https://docs.insomnia.rest/insomnia/introduction-to-plugins)
2. Run `git clone https://github.com/okdv/insinsomnia-plugin-sanitize-url-html`
3. Run `cd insomnia-plugin-sanitize-url-html`
## Usage
By default, this plugin is active on all requests, and requires not action on part of the user! Simply run requests as you normally would, if there is a URL that needs HTML entities removed- the plugin will pick it up and do so automatically before the request is sent. Visually, the URL will remain unchanged in the address bar, however you can see the magic by retrieving the request (see insomnia docs) or inspecting the request in the timeline tab of the result window.  
### Enable/Disable plugin
 - Simply right click on a request or folder in the navigation bar in Insomnia. In the popup, select "Allow HTML Entities in URL" and ***boom*** you're done! The plugin will simply ignore all entities in the request, or if a folder- all requests in that folder. 
 - To enable the plugin again, simply do the opposite of the above. Except instead choose "Remove HTML Entities in URL" in the popup. 
 - Alternatively, you can always disable the entire plugin in Insomnia, [see Insomnia Docs](https://docs.insomnia.rest/insomnia/introduction-to-plugins).
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.
## License
[MIT](https://choosealicense.com/licenses/mit/)