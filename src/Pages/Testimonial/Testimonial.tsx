import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  images: File[];
  items: string;
  description: string;
}

const Testimonial: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    images: [],
    items: "",
    description: ""
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFiles = Array.from(e.target.files || []);

    // Update form data with selected images
    setFormData({
      ...formData,
      images: [...formData.images, ...imageFiles]
    });

    // Generate image previews for selected images
    const previews = imageFiles.map(file => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...previews]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can handle form submission, for example, send formData to backend
    console.log(formData);
    // Reset form after submission
    setFormData({
      images: [],
      items: "",
      description: ""
    });
    setImagePreviews([]); // Reset image previews
  };

  return (
    <div>
      <div className="title">Create Supply Post</div>
      <div className='create-supply-form'>
        <form onSubmit={handleSubmit}>
          <div className='form-single-data'>
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" name="image" onChange={handleImageChange} accept="image/*" multiple />
            {imagePreviews.map((preview, index) => (
              <img key={index} src={preview} alt={`Selected ${index}`} style={{ maxWidth: '100px', marginTop: '10px' }} />
            ))}
          </div>
          <div className='form-single-data'>
            <label htmlFor="items">Items:</label>
            <input type="text" id="items" name="items" value={formData.items} onChange={handleChange} />
          </div>
          <div className='form-single-data'>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Testimonial;
