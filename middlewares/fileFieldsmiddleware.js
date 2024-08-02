import formidable from 'formidable';

export const formidableMiddleware = (req, res, next) => {
    const form = formidable({ multiples: true });
    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error parsing form data' });
        }

        req.body = fields;
        req.files = files;
        console.log({ files, fields });
        next();
    });
};

export default formidableMiddleware;
