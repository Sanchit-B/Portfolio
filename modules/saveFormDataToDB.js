let baseUrl = 'http://localhost:3000/api/';

export function saveEnquiry(data) {
    const hitUrl = baseUrl + 'enquiryform';
    // console.log("=========== hitUrl =============" + hitUrl);
    // console.log("=========== data =============" + JSON.stringify(data));

    let promise = new Promise((resolve) => {
        $.post(hitUrl, data, (res) => {
            resolve(res);
        })
    })

    return promise;

}