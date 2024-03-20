import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  images: File[];
  category: string;
  title: string;
  amount: string;
  description: string;
}

const CreateSupply: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    images: [],
    category: "",
    title: "",
    amount: "",
    description: ""
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can handle form submission, for example, send formData to backend
    console.log(formData);
    // Reset form after submission
    setFormData({
      images: [],
      category: "",
      title: "",
      amount: "",
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
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} />
          </div>
          <div className='form-single-data'>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
          </div>
          <div className='form-single-data'>
            <label htmlFor="amount">Amount:</label>
            <input type="text" id="amount" name="amount" value={formData.amount} onChange={handleChange} />
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

export default CreateSupply;
