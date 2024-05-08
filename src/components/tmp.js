<form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Nom d'utilisateur"
              className="transparent-input"
            />
            <div className="input-with-icon">
              <i className="fas fa-lock"></i> {/* Font Awesome lock icon */}
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mot de passe"
                className="transparent-input"
              />
            </div>
            <input
              type="text"
              name="contacts"
              value={formData.contacts}
              onChange={handleChange}
              placeholder="Contacts"
              className="transparent-input"
            />
            <button
              type="submit"
              className="p-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
            >
              S'inscrire
            </button>
          </div>
        </form>