class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :text
      t.integer :likes, default: 0
      t.boolean :fulfilled, default: false
      t.belongs_to :category
      t.belongs_to :user

      t.timestamps
    end
  end
end
