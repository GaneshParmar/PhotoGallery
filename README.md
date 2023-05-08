# Photo Gallery Application

This is a picture gallery application that retrieves pictures from Unsplash.com based on user-defined categories and displays them in a grid layout. It is built using JavaScript, CSS, HTML, and API calls.

## Features

- Users can enter a category name to search for relevant pictures.
- Pictures are fetched from Unsplash.com using their API.
- The grid displays the retrieved pictures in a constant size.
- Picture author, description, and links to the original pictures on Unsplash.com are provided.

## Installation

1. Clone the repository: `git clone https://github.com/GaneshParmar/PhotoGallery.git`
2. Open the `index.html` file in a web browser.

## Usage

1. Enter a category name in the provided text input field.
2. Press Enter or click the search button to retrieve pictures based on the entered category.
3. The grid will dynamically update with the retrieved pictures and their information.
4. Click on a picture to view the original picture on Unsplash.com.

## API Usage

This application uses the Unsplash API to fetch pictures. To use the API, you need to obtain an access key from Unsplash. Follow these steps:

1. Go to the [Unsplash Developers](https://unsplash.com/developers) page.
2. Create a new application and get your access key.
3. Replace the `accessKey` variable in the JavaScript code (`fetchData.js`) with your own access key.

## Technologies Used

- JavaScript
- CSS
- HTML
- Unsplash API

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
