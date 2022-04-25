const logThis = (text) => text.length > 0 ? console.log(`[strip-url-entities]: ${text}`) : '';

async function setUrl(context) {
    const isExcluded = await context.store.hasItem(`excluded.${context.request.getId()}`);
    if (isExcluded) {
        logThis("Skipping - request(s) excluded");
        return false;
    }

    const url = await context.request.getUrl();
    const hasEntitiesRgx = new RegExp(/\&[^.]{2,}\;/g);
    if (!hasEntitiesRgx.test(url)) {
        logThis("No entities to remove from URL");
        return false;
    }

    const sanitizeUrl = (() => {
        const textArea = document.createElement('textarea');
        return (message) => {
            textArea.innerHTML = message;
            return textArea.value;
        };
    })();

    const sanitizedUrl = sanitizeUrl(url);
    await context.request.setUrl(sanitizedUrl);
    logThis(`HTML entities removed from URL - before: ${url} | after: ${sanitizedUrl}`);
}

const excludeRequest = {
    label: "Allow URL HTML Entities",
    action: async (context, data) => {
        const { request } = data;
        context.store.setItem(`excluded.${request._id}`, "true");
    },
};

const excludeFolder = {
    label: "Allow URL HTML Entities",
    action: async (context, data) => {
        const { requests } = data;
        for (const request of requests) {
            await context.store.setItem(`excluded.${request._id}`, "true");
        }
    },
}

const includeRequest = {
    label: 'Remove URL HTML Entities',
    action: async (context, data) => {
        const { request } = data;
        context.store.removeItem(`excluded.${request._id}`);
    }
};

const includeFolder = {
    label: "Remove URL HTML Entities",
    action: async (context, data) => {
        const { requests } = data;
        for (const request of requests) {
            await context.store.removeItem(`excluded.${request._id}`);
        }
    }
};

exports.requestHooks = [setUrl];
exports.requestActions = [excludeRequest, includeRequest];
exports.requestGroupActions = [excludeFolder, includeFolder];
